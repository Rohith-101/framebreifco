const https = require('https');

function httpsPost(url, data, headers = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const postData = JSON.stringify(data);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        ...headers,
      },
    };
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          reject(new Error('Failed to parse response: ' + body.slice(0, 200)));
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      error: 'GROQ_API_KEY environment variable is missing. Please add it to your Vercel Project Settings.' 
    });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      body = JSON.parse(body);
    }

    if (!body || !body.messages || !body.messages[0]) {
      return res.status(400).json({ error: 'Malformed request body' });
    }

    const userPrompt = body.messages[0].content;
    const url = 'https://api.groq.com/openai/v1/chat/completions';

    const result = await httpsPost(url, {
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: userPrompt }],
      temperature: 0.7,
      max_tokens: 2000,
    }, {
      'Authorization': `Bearer ${apiKey}`,
    });

    if (result.status !== 200) {
      return res.status(result.status).json({ 
        error: result.data.error?.message || 'Groq API error' 
      });
    }

    const text = result.data.choices?.[0]?.message?.content || '';
    return res.status(200).json({ text });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/mcp/v1', (req, res) => {
    res.json({
        mcp_version: "1.0",
        status: "healthy",
        agent: "ChainInsight AI",
        capabilities: {
            tools: [
                { name: "scan_transactions", description: "Analyze onchain transactions" },
                { name: "track_wallet", description: "Monitor wallet behavior" }
            ]
        }
    });
});

app.get('/', (req, res) => res.send('ChainInsight AI is Online!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
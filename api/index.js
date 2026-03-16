const express = require('express');
const cors = require('cors');
const app = express();

// 1. Mengaktifkan CORS agar 8004scan bisa mengakses API ini tanpa diblokir browser
app.use(cors());
app.use(express.json());

// 2. Endpoint Utama untuk Protokol MCP (Model Context Protocol)
// Ini adalah URL yang akan Anda masukkan ke 8004scan: https://nama-proyek.vercel.app/mcp/v1
app.get('/mcp/v1', (req, res) => {
    res.json({
        mcp_version: "1.0",
        status: "healthy",
        agent: "ChainInsight AI",
        capabilities: {
            tools: [
                { 
                    name: "scan_transactions", 
                    description: "Menganalisis transaksi on-chain secara real-time" 
                },
                { 
                    name: "track_wallet", 
                    description: "Melacak perilaku dan pergerakan dana dompet (wallet)" 
                }
            ]
        }
    });
});

// 3. Endpoint Dasar (Halaman Utama)
app.get('/', (req, res) => {
    res.send('ChainInsight AI MCP Server is Online and Healthy!');
});

// 4. PENTING: Untuk Vercel, kita TIDAK menggunakan app.listen.
// Kita mengekspor aplikasi agar Vercel bisa menjalankannya sebagai Serverless Function.
module.exports = app;

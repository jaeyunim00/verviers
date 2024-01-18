// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 정적 파일 제공을 위한 미들웨어
app.use(express.static(path.join(__dirname, 'public')));

// 메인 페이지 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

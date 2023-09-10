const server = http.createServer((req, res) => {
    // Set the response headers to indicate HTML content
    res.setHeader('Content-Type', 'text/html');
  
    // Respond with the HTML content
    res.end('<h1>Hello Node!!!!</h1>\n');
  });
  
  // Start the server on port 3000
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
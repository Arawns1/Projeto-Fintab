function status(request, response) {
  response.status(200).json({ chave: "chave" });
}

export default status;
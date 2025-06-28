#!/bin/bash
echo "Inicializando dados simulados..."
mkdir -p data
echo '[{"id": "1", "nome": "Luanda", "codigo": "LU"}]' > data/provincias.json
echo "Dados criados com sucesso na pasta ./data"
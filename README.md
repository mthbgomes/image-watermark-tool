# Watermark Images

Este projeto é um script de utilidade para adicionar marcas d'água em imagens. Ele lê uma imagem de origem, aplica as marcas d'água consumindo informações de um arquivo de texto, e salva as imagens resultantes em um diretório especificado.

## Sumário

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Configuração](#configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

O script `watermarkImages.js` lê uma imagem de origem, aplica múltiplas marcas d'água de texto (definidas em um arquivo `watermarkInfos.txt`), e salva cada imagem com marca d'água em um diretório de saída.

## Funcionalidades

- Carrega uma imagem de origem de um diretório.
- Lê texto de marca d'água de um arquivo `watermarkInfos.txt`.
- Aplica cada texto de marca d'água na imagem.
- Salva cada imagem com marca d'água em um diretório de saída.

## Pré-requisitos

- Node.js instalado
- npm (Node Package Manager) instalado

## Instalação

1. Clone este repositório para o seu diretório local:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências necessárias:
   ```bash
   npm install
   ```

## Uso

1. Crie e coloque a imagem de origem no diretório `sourceImage` ou no diretório que desejar. Lembre de alterar o `sourceImagePath` no código.
2. Crie um arquivo `watermarkInfos.txt` na raiz do projeto com o texto de marca d'água em cada linha. O script irá criar uma cópia da imagem especificada para cada linha com informação disponível no arquivo.
3. Execute o script:

   ```bash
   node watermarkImages.js
   ```

4. Cire o diretório `watermarkedImages` para que as imagens com marca d'água sejam salvas. Assim como para as imagens de entrada, lembre de alterar em `outputImagePath` caso queira salvar em outro local.

## Configuração

- `sourceImagePath`: Caminho para o diretório contendo a imagem de origem.
- `outputImagesPath`: Caminho para o diretório onde as imagens com marca d'água serão salvas.
- `watermarkTextColor`: Cor do texto da marca d'água.
- `watermarkFontStyle`: Estilo da fonte da marca d'água.
- `watermarkTextAlign`: Alinhamento do texto da marca d'água.
- `mimeType`: Tipo MIME da imagem de saída.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

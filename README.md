# UserEmailManager

O projeto consiste em uma arquitetura de microserviços que utiliza o RabbitMQ, um message broker amplamente consolidado no mercado, para facilitar a comunicação entre os sistemas. A aplicação é composta por dois serviços independentes:

### MS-USER

Este microserviço foi desenvolvido em TypeScript é responsável pelo gerenciamento de usuários. Ele oferece os seguintes endpoints:

```markdown
GET /user - Recupera uma lista de todos usuários.

GET /user/{id} - Recupera um usuário.

POST /user - Registra um novo usuário.
```

### MS-EMAIL

Este microserviço foi desenvolvido em Java é dedicado ao envio de emails de boas-vindas aos usuários recém-cadastrados. Ele oferece o seguinte endpoint:

```markdown
GET /email - Recupera uma lista de todos emails.
```

## Requisitos:

- Configure o SMTP Google no Micro Serviço de email.
- Instale o banco Mysql e Postgresql na sua maquina ou use Docker.
- Para utilizar o RabbitMQ, crie uma conta no endereço: <a href="https://www.cloudamqp.com/">CloudAMQP</a>

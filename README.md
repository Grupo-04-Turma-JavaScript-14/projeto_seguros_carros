# 🚗 Sistema de Seguro de Carro


## 📌 Sobre o Projeto
API REST desenvolvida para gerenciar seguros de veículos, permitindo cadastro, consulta, atualização, exclusão e busca por placa.

 ## DER — Diagrama Entidade-Relacionamento (Sistema de Seguros)
  
<img width="1536" height="1024" alt="Diagrama de sistema de seguros de veículos" src="https://github.com/user-attachments/assets/a053a4cf-b245-4953-81e4-5da3b7f02e72" />
## ⚙️ Funcionalidades
- Criar seguro
- Listar seguros
- Buscar por ID
- Buscar por placa
- Atualizar dados
- Deletar seguro

## 🧱 Entidade

### Seguro
- id
- nomeSegurado
- modeloVeiculo
- placa
- valorSeguro
- ativo

---

## 🌐 Endpoints

GET /seguro  
GET /seguro/{id}  
GET /seguro/placa/{placa}  
POST /seguro  
PUT /seguro  
DELETE /seguro/{id}  

## 🛠️ Tecnologias
- Node.js
- TypeScript
- NestJS
- TypeORM
- MySQL

## 👥 Equipe
- Product Owner: Mariana Soares  
- Scrum Master: Mirelly Santos  
- Desenvolvedores: Marlos, Samara, Henrique, José Javier


 

# 🚗 Sistema de Seguro de Carro

## 📌 Sobre o Projeto
API REST desenvolvida para gerenciar seguros de veículos, permitindo cadastro, consulta, atualização, exclusão e busca por placa.

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

## 📌 Status
🚧 Em desenvolvimento

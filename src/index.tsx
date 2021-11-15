import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    registro: Model,
  },


  seeds(server) {
    server.db.loadData({
      registros: [
        {
          id:1,
          cliente: 'Interfort',
          tombo: 1958,
          equipamento: 'Brother DCP-7065DN',
          status: 'Em cliente',
          atualizado: "12/03/2020",
        },
        {
          id:2,
          cliente: 'Arituba Park Hotel',
          tombo: 574,
          equipamento: 'HP LaserJet M1132 MFP',
          status: 'Manutenção',
          atualizado: "10/11/2021",
        }
      ],
    })
  },

  routes() {
    this.namespace= 'api';
    
    this.get('/registros', () => {
      return this.schema.all('registro')
    })

    this.post('/registros', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('registro', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

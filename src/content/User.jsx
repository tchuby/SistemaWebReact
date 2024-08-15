import React from "react";
import Main from '../components/Main'
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported



export default function AppUser() {

    return (
        <Main icon='user' title='PERFIL' subtitle='NODE + REACT'>
            <div className="text-white">
                <h1>USUÁRIOS</h1>
                <p>Sistema de cadastro</p>
                <hr />
                <h3> Preencha os dados abaixo</h3>
                <div>
                    <form className="container">
                        <div className="mb-3">
                            <label htmlFor='Nome' className="text-white"> Digite seu nome </label>
                            <input type="text" id="Nome" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='Idade' className="text-white"> Digite sua idade </label>
                            <input type="text" id="Idade" />
                        </div>
                        <div className="d-flex justify-content-start mt-2" >
                            <button className="btn btn-primary"> Salvar </button>
                            <button className="btn btn-warning ms-4" > Cancelar </button>
                        </div>
                    </form>
                </div>
                <div className="table-responsive mt-2 px-3">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th> Código </th>
                                <th> Nome </th>
                                <th> Idade </th>
                                <th> Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> AAA </td>
                                <td> AAA </td>
                                <td> AAA </td>
                                <td> <div className="d-flex justify-content-start mt-2" >
                                    <button className="btn btn-secondary"> Alterar </button>
                                    <button className="btn btn-danger ms-4" > Cancelar </button>
                                </div> </td>
                            </tr>
                            <tr>
                                <td> AAA </td>
                                <td> AAA </td>
                                <td> AAA </td>
                                <td> <div className="d-flex justify-content-start mt-2" >
                                    <button className="btn btn-secondary"> Alterar </button>
                                    <button className="btn btn-danger ms-4" > Cancelar </button>
                                </div> </td>
                            </tr>
                            <tr>
                                <td> AAA </td>
                                <td> AAA </td>
                                <td> AAA </td>
                                <td> <div className="d-flex justify-content-start mt-2" >
                                    <button className="btn btn-secondary"> Alterar </button>
                                    <button className="btn btn-danger ms-4" > Cancelar </button>
                                </div> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </Main>
    )
}




// import React,  { Componet } from "react"
// import Main from '../components/Main'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// const baseUrl = 'https://localhost:3001/user'

// const initialState = {
//     user: { nome: '', idade: ''},
//     list: []
// }
// export default class AppUser extends Componet {

//     constructor(props) {
//         super(props)
//         this.state = initialState
//     }

//     load(){

//     }    

//     save(){

//     }

//     update(){

//     }

//     list()){

//     }
//     return (
//         <Main icon='user' title='PERFIL' subtitle='NODE + REACT'>
//             <div className="text-white">
//                 <h1>USUÁRIOS</h1>
//                 <p>Sistema de cadastro</p>
//                 <hr />
//                 <h3> Preencha os dados abaixo</h3>
//                 <div>
//                     <form className="container">
//                         <div className="mb-3">
//                             <label htmlFor='Nome' className="text-white"> Digite seu nome </label>
//                             <input type="text" id="Nome" />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor='Idade' className="text-white"> Digite sua idade </label>
//                             <input type="text" id="Idade" />
//                         </div>
//                         <div className="d-flex justify-content-start mt-2" >
//                             <button className="btn btn-primary"> Salvar </button>
//                             <button className="btn btn-warning ms-4" > Cancelar </button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="table-responsive mt-2 px-3">
//                     <table className="table table-striped table-bordered table-hover">
//                         <thead>
//                             <tr>
//                                 <th> Código </th>
//                                 <th> Nome </th>
//                                 <th> Idade </th>
//                                 <th> Ações </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td> AAA </td>
//                                 <td> AAA </td>
//                                 <td> AAA </td>
//                                 <td> <div className="d-flex justify-content-start mt-2" >
//                                     <button className="btn btn-secondary"> Alterar </button>
//                                     <button className="btn btn-danger ms-4" > Cancelar </button>
//                                 </div> </td>
//                             </tr>
//                             <tr>
//                                 <td> AAA </td>
//                                 <td> AAA </td>
//                                 <td> AAA </td>
//                                 <td> <div className="d-flex justify-content-start mt-2" >
//                                     <button className="btn btn-secondary"> Alterar </button>
//                                     <button className="btn btn-danger ms-4" > Cancelar </button>
//                                 </div> </td>
//                             </tr>
//                             <tr>
//                                 <td> AAA </td>
//                                 <td> AAA </td>
//                                 <td> AAA </td>
//                                 <td> <div className="d-flex justify-content-start mt-2" >
//                                     <button className="btn btn-secondary"> Alterar </button>
//                                     <button className="btn btn-danger ms-4" > Cancelar </button>
//                                 </div> </td>
//                             </tr>
//                         </tbody>
//                     </table>

//                 </div>
//             </div>
//         </Main>
//     )
// }
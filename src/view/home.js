import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'

// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';
import ProgressBar from '../components/progressBar';


function App(props) {
    const { store, actions } = useContext(Context);
    return (
        <div className="container pt-5 text-center">
            <div className="row">
                <div className="col-md-12">
                    <h1>Informe</h1>
                </div>
                <div className="col-md-12 pt-4">
                    <div className="table-responsive-lg">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col-2">#</th>
                                <th scope="col-2">Name</th>
                                <th scope="col"><i class="fas fa-chalkboard-teacher fa-2x pr-2"></i>Cohort</th>
                                <th scope="col"><i class="fab fa-js-square fa-2x"></i></th>
                                <th scope="col"><i class="fab fa-css3-alt fa-2x"></i></th>
                                <th scope="col"><i class="fab fa-bootstrap fa-2x"></i></th>
                                <th scope="col"><i class="fab fa-git fa-2x"></i></th>
                                <th scope="col"><i class="fab fa-js-square fa-2x"></i></th>
                                <th scope="col"><i class="fab fa-react fa-2x"></i></th>
                                <th scope="col"><i class="fab fa-react fa-2x"></i> Context</th>
                                <th scope="col"><i class="fab fa-python fa-2x"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store.results.map((student, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{student.id}</th>
                                            <td>{student.name}</td>
                                            <td>{student.cohort}</td>
                                            <td>
                                                <ProgressBar myprogress={student.tech.html} />
                                            </td>
                                            <td><ProgressBar myprogress={student.tech.css} /></td>
                                            <td><ProgressBar myprogress={student.tech.bootstrap} /></td>
                                            <td><ProgressBar myprogress={student.tech.git} /></td>
                                            <td><ProgressBar myprogress={student.tech.js} /></td>
                                            <td><ProgressBar myprogress={student.tech.react} /></td>
                                            <td><ProgressBar myprogress={student.tech.reactContext} /></td>
                                            <td><ProgressBar myprogress={student.tech.python} /></td>                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

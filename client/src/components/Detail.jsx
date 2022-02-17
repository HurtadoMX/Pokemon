import React, { Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, deleteDetail } from "../actions/index";
import { useEffect } from "react";
import Navbar from "./NavBar";
import "./styles/Detail.css";


export default function Detail() {
  const dispatch = useDispatch();
  const params = useParams();
  const detalles = useSelector((state) => state.detail);
  const navigate = useNavigate();
  // console.log(params)
  //   console.log(detalles)

  //este useEffect me ayuda a cargar mi detail pero tambien a borrar un detail anterior y no mostrarlo cuando elijo uno nuevo
  useEffect(() => {
    dispatch(getDetail(params.id));

    return () => {
      dispatch(deleteDetail());
    };
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteDetail(id));
    alert("Eliminado");
    navigate("/home");
  }

  return (
    <Fragment>
      <Navbar />
      <div id="body">


      <div className="containerr">
        <div className="card">
        {detalles.length > 0 ? (
          <>
            <div className="left-column background1-left-column">
              <h1>{detalles[0].nombre}</h1>
              <img clasName="imagen" src={detalles[0].imagen} />
            </div>
            <br />
            <div className="right-column">
              <div>
                <h2>vida: {detalles[0].vida}</h2>
                <h2>ataque: {detalles[0].ataque}</h2>
                <h2>defensa: {detalles[0].defensa}</h2>
                <h2>velocidad: {detalles[0].velocidad}</h2>
                <h2>altura: {detalles[0].altura}</h2>
                <h2>peso: {detalles[0].peso}</h2>

                <h2>
                  Poderes:{" "}
                  {!detalles[0].createdInDb
                    ? detalles[0].types + " "
                    : detalles[0].types}
                </h2>

                <Link to="/home">
                  <button className="button background1-left-column">REGRESAR</button>
                </Link>
               
              </div>
            </div>
          </>
        ) : (
          
          <div className="body">

          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
          
          )}
        </div>
      </div>
          </div>
    </Fragment>
  );
}

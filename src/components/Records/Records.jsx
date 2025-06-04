// Imports
import { useEffect, useRef, useState } from "react";
import "./Records.css";
import PrincipalRecord from "../PrincipalRecord/PrincipalRecord";
import DailyRecord from "../DailyRecord/DailyRecord";
import Button from "../Button/Button";

// Code
const Records = () => {
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [showDailyRecordForm, setShowDailyRecordForm] = useState(false);

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    if (!showNewPatientForm) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    context.lineWidth = 2;
    context.lineCap = "round";
    context.strokeStyle = "#000";
    setCtx(context);

    canvas.width = canvas.offsetWidth;
    canvas.height = 300;
  }, [showNewPatientForm]);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    ctx.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const sendInfoToServer = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button
        text="+ Nuevo Paciente"
        onClick={() => setShowNewPatientForm(true)}
        className={"btn btn-meli m-4"}
      />

      <Button
        text="+ Registro Diario"
        onClick={() => setShowDailyRecordForm(true)}
        className={"btn btn-meli m-4"}
      />

      {showNewPatientForm && (
        <PrincipalRecord
          canvasRef={canvasRef}
          startDrawing={startDrawing}
          draw={draw}
          endDrawing={endDrawing}
          clearCanvas={clearCanvas}
          sendInfoToServer={sendInfoToServer}
        />
      )}

      {showDailyRecordForm && (
        <DailyRecord sendInfoToServer={sendInfoToServer} />
      )}
    </>
  );
};

// Exports
export default Records;

import { useState } from "react";
import Input from "../components/Input";
import "../index.css";

function Password() {
  const [password, setPassword] = useState(null);
  const [passwordSize, setPasswordSize] = useState(20);
  const [showInput, setShowInput] = useState(false);
  const [copy, setCopy] = useState("Copiar");

  const customInput = showInput ? passwordSize : 8;

  const handlePasswordGeneration = () => {
    if (passwordSize === "" || passwordSize === 0) {
      return setPassword("Tamanho inválido");
    }
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let index = 0; index < customInput; index++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopy("Copiar");
  };

  const handleCopy = () => {
    window.navigator.clipboard.writeText(password);
    setCopy("Copiado!");
  };

  return (
    <div className="password">
      <h2>Gerador de senhas</h2>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => {
            setShowInput((show) => !show);
          }}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input
            passwordSize={passwordSize}
            setPasswordSize={setPasswordSize}
          />
        </div>
      )}
      <div className="buttons-container">
        <button onClick={handlePasswordGeneration}>
          Gerar senha de {customInput} caracteres!
        </button>
        <button onClick={handleCopy}>{copy}</button>
      </div>
      <p>{password}</p>
    </div>
  );
}

export default Password;

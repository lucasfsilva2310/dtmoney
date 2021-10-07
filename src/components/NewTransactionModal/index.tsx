import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada"></img>
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída"></img>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

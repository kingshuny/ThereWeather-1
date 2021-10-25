import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--modal-bg-color);
  z-index: 200;
`;

const Popup = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  min-width: 300px;
  max-width: 500px;
  height: 40vw;
  min-height: 200px;
  max-height: 300px;
  background-color: var(--modal-confirm-bg);
  font-size: 1.5rem;
  border-radius: 1.5rem;

  & > article {
    margin: .5rem;
  }

  & .closeButtonArea {
    align-self: flex-end;
    margin: 0 2rem;
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  width: 30%;
  min-width: 80px;
  max-width: 120px;
  margin: .8rem;
  padding: .3rem;
  font-size: 1.2rem;
  background-color: var(--modal-confirm-button-bg);
`;

export default function ModalConfirm({ children }) {
  return (
    <Outer className="modalBackground">
      <Popup className="modalConfirm">
        <article className="closeButtonArea">
          <button className="modalCloseButton">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </article>
        <article className="confirmText">
          {children}
        </article>
        <article className="modalConfirmButtons">
          <Button className="modalButtonYes">예</Button>
          <Button className="modalButtonNo">아니오</Button>
        </article>
      </Popup>
    </Outer>
  );
}

/* 사용 예시
- props
  - isOpen
    - true 할당 -> 보인다
    - isOpen을 쓰지 않거나 false 할당 -> 안 보인다
(1) 삭제
  <ModalConfirm>삭제하시겠습니까?</ModalConfirm>

(2) 수정
  <ModalConfirm>수정하시겠습니까?</ModalConfirm>

(3) 탈퇴
  <ModalConfirm>
    <p>탈퇴하시겠습니까?</p>
    <p>이유를 선택해 주세요</p>
    <select name="pets" id="pet-select">
      <option value="">선택</option>
      <option value="notUseful">사용을 많이 하지 않음</option>
      <option value="inconvenientDesign">디자인이 불편함</option>
      <option value="otherOptions">다른 앱을 이용하기 위해</option>
      <option value="andSoForth">기타</option>
    </select>
  </ModalConfirm>
*/
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  addValueAction,
  subtractValueAction,
  storeResultAction,
  deleteResultAction,
} from "./store/actions";

const StyledHeader = styled.header`
  width: 100%;
  background-color: #3298dc;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCounter = styled.h1`
  color: white;
  font-size: 100px;
`;

const StyledButtonWrapper = styled.div`
  padding: 30px;
  display: flex;
  background-color: orange;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 100px;
  margin: 40px;
  border: 10px solid red;
`;

const Counter = ({
  counter,
  onIncrementCounter,
  onSubtractCounter,
  onAddCounter,
  onDecrementCounter,
  results,
  onStoreResult,
  onDeleteResult,
}) => {
  return (
    <>
      <StyledHeader>
        <StyledCounter>{counter}</StyledCounter>
      </StyledHeader>
      <StyledButtonWrapper>
        <StyledButton onClick={onIncrementCounter}>Increment</StyledButton>
        <StyledButton onClick={onDecrementCounter}>Decrement</StyledButton>
        <StyledButton onClick={() => onAddCounter(10)}>Add 10</StyledButton>
        <StyledButton onClick={() => onSubtractCounter(5)}>Subtract 5</StyledButton>
      </StyledButtonWrapper>
      <hr />
      <button onClick={() => onStoreResult(counter)}>Store Result</button>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.id} onClick={() => onDeleteResult(result.id)}>
              {result.value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.ctr.counter,
  results: state.res.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
  onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
  onSubtractCounter: (value) => dispatch(subtractValueAction(value)),
  onAddCounter: (value) => dispatch(addValueAction(value)),
  onStoreResult: (result) => dispatch(storeResultAction(result)),
  onDeleteResult: (id) => dispatch(deleteResultAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

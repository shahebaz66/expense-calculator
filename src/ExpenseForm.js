import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Select,
} from "@chakra-ui/react";

const ExpenseForm = ({ onAddExpense }) => {
  const [participants, setParticipants] = useState([]);
  const [payer, setPayer] = useState("");
  const [expense, setExpense] = useState("");

  const handleAddParticipant = () => {
    setParticipants([...participants, ""]);
  };

  const handleParticipantChange = (index, value) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);
  };

  const handleAddExpense = () => {
    const validParticipants = participants.filter(p => p.trim() !== "");
    if (payer && expense && validParticipants.length > 0) {
      onAddExpense({
        payer,
        expense: parseFloat(expense),
        participants: validParticipants,
      });
      setParticipants([]);
      setPayer("");
      setExpense("");
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Payer</FormLabel>
        <Select
          placeholder="Select who paid"
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
        >
          {participants.map((participant, index) => (
            <option key={index} value={participant}>
              {participant}
            </option>
          ))}
        </Select>
      </FormControl>
      {participants.map((participant, index) => (
        <FormControl key={index}>
          <FormLabel>Participant {index + 1}</FormLabel>
          <Input
            value={participant}
            onChange={(e) => handleParticipantChange(index, e.target.value)}
            placeholder="Enter participant name"
          />
        </FormControl>
      ))}
      <Button onClick={handleAddParticipant} colorScheme="blue">
        Add Participant
      </Button>
      <FormControl>
        <FormLabel>Expense</FormLabel>
        <Input
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          placeholder="Enter amount"
        />
      </FormControl>
      <Button onClick={handleAddExpense} colorScheme="teal">
        Add Expense
      </Button>
    </VStack>
  );
};

export default ExpenseForm;

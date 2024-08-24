import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const ExpenseSummary = ({ expenses }) => {
  const calculateOwes = () => {
    const balances = {};

    expenses.forEach(({ payer, expense, participants }) => {
      const splitAmount = expense / participants.length;

      participants.forEach((participant) => {
        if (participant !== payer) {
          balances[participant] = (balances[participant] || 0) - splitAmount;
          balances[payer] = (balances[payer] || 0) + splitAmount;
        }
      });
    });

    return balances;
  };

  const balances = calculateOwes();

  return (
    <VStack spacing={4} align="stretch">
      {Object.entries(balances).map(([participant, balance]) => (
        <Box key={participant} p={4} borderWidth="1px" borderRadius="md">
          <Text>{participant} {balance > 0 ? "is owed" : "owes"} ${Math.abs(balance.toFixed(2))}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ExpenseSummary;

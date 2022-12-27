import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function nextStep() {
    setCurrentStepIndex(prevState => {
      if(prevState >= steps.length - 1) return prevState 
      return prevState + 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isPenultimate: currentStepIndex === steps.length - 2,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    nextStep,
  }
}
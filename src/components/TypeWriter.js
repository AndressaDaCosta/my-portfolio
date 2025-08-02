import React, { useState, useEffect } from 'react';

const TypeWriter = ({ steps, loop = 1, wrapper: Wrapper = 'span' }) => {
	const [displayText, setDisplayText] = useState('');
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopCount, setLoopCount] = useState(0);

	useEffect(() => {
		if (loop !== Infinity && loopCount >= loop) return;

		const currentStep = steps[currentStepIndex];
		const isString = typeof currentStep === 'string';
		const text = isString ? currentStep : steps[currentStepIndex - 1];
		const delay = isString ? 100 : currentStep;

		const timer = setTimeout(
			() => {
				if (isString) {
					if (!isDeleting) {
						if (displayText.length < text.length) {
							setDisplayText(
								text.slice(0, displayText.length + 1)
							);
						} else {
							setIsDeleting(true);
						}
					} else {
						if (displayText.length > 0) {
							setDisplayText(
								text.slice(0, displayText.length - 1)
							);
						} else {
							setIsDeleting(false);
							setCurrentStepIndex((prev) => {
								const nextIndex = prev + 2;
								if (nextIndex >= steps.length) {
									setLoopCount((count) => count + 1);
									return 0;
								}
								return nextIndex;
							});
						}
					}
				} else {
					setCurrentStepIndex((prev) => prev + 1);
				}
			},
			isString ? (isDeleting ? 50 : 100) : delay
		);

		return () => clearTimeout(timer);
	}, [displayText, currentStepIndex, isDeleting, steps, loop, loopCount]);

	return <Wrapper>{displayText}</Wrapper>;
};

export default TypeWriter;

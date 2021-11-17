// Generate random index for selecting messages.
const selectRandomIndex = (lengthOfArray) => Math.floor(Math.random() * lengthOfArray);

// Arrays that build sentences.
const subject = ['You', 'Your mother', 'Your love', 'Your family'];
const timeHorizon = ['tomorrow', 'this year', 'next year', 'this month', 'next week', 'next month'];
const topics = ['win a lottery', 'go to a trave', 'buy a house', 'get sick', 'buy a new car', 'find someone', 'get rich very quickly'];

// Build sentence with a word from each array.
const sentenceBuilder = () => {
    const selectedSubject = subject[selectRandomIndex(subject.length)];
    const selectedTimeHorizon = timeHorizon[selectRandomIndex(timeHorizon.length)];
    const selectedTopic = topics[selectRandomIndex(topics.length)];

    return `${selectedSubject} will ${selectedTopic} ${selectedTimeHorizon}, believe me dear!`;
};

// Run the script.
console.log(sentenceBuilder());


interface DETAILS {
    createAt: Date,
    updateAt: Date,
}

interface mainPage {
    title: string;
    likes: number;
    accounts: string[];
    status: string;
    details?: DETAILS;
}

const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
}
    
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}
    
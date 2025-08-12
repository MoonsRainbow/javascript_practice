const quotes = [
	{
		quote:
			"The only limit to our realization of tomorrow is our doubts of today.",
		author: "Franklin D. Roosevelt",
	},

	{
		quote: "In the middle of every difficulty lies opportunity.",
		author: "Albert Einstein",
	},

	{
		quote:
			"Success is not final, failure is not fatal: It is the courage to continue that counts.",
		author: "Winston Churchill",
	},

	{
		quote:
			"Do not wait to strike till the iron is hot, but make it hot by striking.",
		author: "William Butler Yeats",
	},

	{ quote: "Happiness depends upon ourselves.", author: "Aristotle" },

	{
		quote: "The best way to predict the future is to invent it.",
		author: "Alan Kay",
	},

	{
		quote: "Don’t count the days, make the days count.",
		author: "Muhammad Ali",
	},

	{
		quote: "Whether you think you can, or you think you can’t — you’re right.",
		author: "Henry Ford",
	},

	{
		quote: "It always seems impossible until it’s done.",
		author: "Nelson Mandela",
	},

	{
		quote: "If you want to lift yourself up, lift up someone else.",
		author: "Booker T. Washington",
	},

	{
		quote: "Strive not to be a success, but rather to be of value.",
		author: "Albert Einstein",
	},

	{
		quote: "The journey of a thousand miles begins with a single step.",
		author: "Lao Tzu",
	},

	{
		quote:
			"What you get by achieving your goals is not as important as what you become by achieving your goals.",
		author: "Zig Ziglar",
	},

	{
		quote: "You miss 100% of the shots you don’t take.",
		author: "Wayne Gretzky",
	},

	{ quote: "Dream big and dare to fail.", author: "Norman Vaughan" },

	{
		quote: "Act as if what you do makes a difference. It does.",
		author: "William James",
	},

	{ quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },

	{
		quote: "Be yourself; everyone else is already taken.",
		author: "Oscar Wilde",
	},

	{
		quote: "Do what you can, with what you have, where you are.",
		author: "Theodore Roosevelt",
	},

	{
		quote: "Opportunities don't happen. You create them.",
		author: "Chris Grosser",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;


---
title: "Designing a Programming Language from scanners to binary code - Part 1"
titlefa: ""
description: "Historically Programming languages were designed to mitigate the tremendous difficulty of writing instructions by hand. Today programmers discussion is around what is the best programming language is and how their languages is better than others. In this series we are going to create our own programming language to become superior than every one :) and learn something along the way."
descriptionfa: ""
date: "2023-07-16"
---

### Content
**>> part 1 - Lexer and parser ** <br>
part 2 - Abstract syntax tree <br>
part 3 - Compile to assembly <br>
part 4 - Implementing a simple assembler <br>
part 5 - Implementing a simple linker <br>
part 6 - Generating an Elf file <br>

### Prerequisites 
These Series are intended for people interested in compilers with minimal understanding of programming and data structures. All the codes in here are written in c; The only good language that exists :) 

Note: In this article we use the term "Programming language" but in most instances what we are referring to is actually "Compiler" not the Grammar.

### Define a simple grammar
we want our programming language to be really simple yet flexible so in terms of grammar we are aiming at something between python and c.
We should note that the more reserved characters and keywords we have it gets easier to parse and identify different parts of the code.
For now we define this grammar:
```
Identifier : ([a..Z] | "_")+ ([a..z] | [0..9] | "_")*
assign : Identifier ~ "=" ~ Expr
Expr : Int | Int ~ ("+"|"-"|"*"|"/") ~ Int
~ : " " | "\t"
```
Now lets explain it! First we define Identifier which identifies any reusable parts of the code like variables and functions. Identifiers here are similar to C
and can only start with Underscore or alphabetic characters and also include numbers.
Next we can see assigning variables definition, kinda self explanatory!. Expression can be any numeric value is being created using other values or by accessing memory of
defined variables. For now we can simplify a lot and define Expressions only as a single number or binary operation between two numbers.
We only define "~" only as a way to show white-space between two parts of grammar and as it is a way to show white-space it some parser-generators.

### What is a Lexer?
Lexing or Lexical analysis is the process of generating a sequence of meaningful tokens based on a text. In English, the sentence "I live in a castle"
can be tokenized like the following:

I (Subject) | live (Verb) | in a castle (Object)

This process is necessary to transform the code from human readable text to something that a computer can use. OK let's get started!


Some compilers will combine the process of lexing and parsing together for this example we are writing our own lexer/parser so we will have a lexer that iterates over tokens which
then we can be used along side of the parser in order to make parsing and lexing within the same loop.


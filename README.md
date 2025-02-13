# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst-case runtime is $\Theta(n^2logn)$.  This is because of the outer for loop in mergesort and the merge function.  I included comments in my code that explain the runtime for each line.

I recieved help from my cousin, who is a software engineer, and ChatGPT. I attempted writing the algorithm, which is shown in my first commit. I then showed my attempt to my cousin, who then recommended that I use a helper function. He also helped me understand how the logic is supposed to work, which enabled me to write the rest of the code, as I was struggling with visualizing what is supposed to be happening in an iterative and in-place version of mergesort. Combining my first attempt with my cousins's help and advice, I was able to write and complete the algorithm. Like my cousin, ChatGPT helped me understand the logic of this algorithm.

I also recieved help from Ali.  I didn't realize that when multiplication is done in a for loop, the complexity is log(n).  Ali explained that to me, as at first I had the runtime of that line as $\Theta(n)$, so it was then determined that I needed to change the runtime of that line to $\Theta(logn)$ which led me to the conclusion of the runtime.  He also explained how the loops of the merge function combine to a runtime of O(n).

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

-----

I wrote the code for this assignment last semester and just needed to complete the runtime analysis this semester.

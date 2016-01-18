## USE THIS CODE AT YOUR OWN RISK!

This code could be used to retrieve all the comments on CMT for ICLR 2016 and
compute statistics on scores given by the reviewers. I used Chrome's JavaScript
console to run `get_reviews.js`.

I used VIM and `html2text` to quickly get rid of blocks of HTML and text in the
output of `get_reviews.js` before using `parse_reviews.py`.

I challenged myself to write this code in the shortest time I could. So it
could get cleaned up a bit. 

Ryan Kiros trained a [char-rnn](https://github.com/karpathy/char-rnn) on the
output of this code to generate new reviews. You can see samples below:

[iclr1](http://www.cs.toronto.edu/~rkiros/iclr1.txt)
[iclr2](http://www.cs.toronto.edu/~rkiros/iclr2.txt)

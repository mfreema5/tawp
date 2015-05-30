# Sideways statistics

This document is about the relationship between four characteristics of linear regressions.  Those characteristics are:

* confidence level
* statistical power
* sample size
* effect size

Those four characteristics are deterministic.  Meaning, if you know any three of them, you can determine the fourth.

Another way to look at the relationship between those four is to think of them as being in balance with each other.  If one of them changes, at least one of the others must also change, in order to maintain the balance. If you are interested in any of those characteristics, you will likely find it helpful to understand the others and the relationship between them.

Most importantly, in my opinion, you need to understand these four and how they are related if you want to properly understand what “statistical significance” actually means, and if you want to avoid fooling yourself into believing that statistical significance alone is evidence evidence of a meaningful result. 

I rely heavily of visual representations to help explain things in this document.  If you are not a “visual thinker”, you may well find the text too sparse to be useful to you.  I do not rely much on equations, rigorous derivations or formal logic.

This document is not meant to be a complete discussion of linear regression or related methods.  Not only is focused on a narrow range of applications of regression it also does not consider all possible cases.

I came up with the graphics and explanations in this document to help myself understand the relationship between statistical significance, statistical power, sample size, and effect size.  I don't expect or intend them to do anything more than that.  But, I am hoping that they can help other people to understand those four features of linear regressions, too.

## Why sideways?

I've called this “Sideways statistics” because of the graphics I created to help myself understand the four deterministic features of linear regressions.  So, let's get to the graphics.

The first graph (figure NN) is a standard probability curve.  Hopefully you've seen it before, because I'm just going to do a quick review of what it means.

![Figure NN: Probability curve](./images/basic-prob-curve-200.png)

The horizontal axis is the possible values for some measure.  The vertical axis is the probability of getting the value on the horizontal axis when you make a measurement.  But we aren't usually interested in the probability of a specific value.  Instead we're interested in the probability of getting a result that is bounded by some specific value.  Where “bounded by” means that the result in which we're interested is anything that is, for example, “greater than or equal to” the specific value.  We could also be looking for any of the “less than or equal to” values.

The probability of a result that is bounded by some specific value is equal to the total area under the curve to the appropriate side of that value.  In the example graphic (figure NN), that's the shaded area.

In the case of linear regression, the probability that most people are familiar with is the “*p* value”, a.k.a, “alpha”, “confidence level”, etc.  In the social sciences, the most common value for it is 5%, often reported as “*p*<.05”.

When you're using a null-hypothesis significance test to analyze a sample, a confidence level of 5% means that there is a 5% chance that population correlation is not zero.  You don't know the population correlation because you measured and analyzed a sample of the population.  What you have is the sample correlation.  The population correlation is related to the sample correlation by a probability curve.  

In the next example graphic (figure NN), the mean value of the probability curve is the value of the sample correlation of some hypothetical analysis.  The probability curve shows what values the population correlation may have, based on the sample correlation value. (It also depends on the size of the sample, but we'll get to that later.)  In the example graphic, 5% of the total area under the curve is bounded by a measured value of zero.  So, there is a 5% probability that the population correlation is “less than or equal to” zero.  That's the “null” in “null hypothesis significance testing”.

If you take the previous example graphic and swap the axes, you get the next example (figure NN).  Now, the “null” line is at the bottom of the graph, the horizontal axis is probabilities, and the vertical axis is the value of correlations.  The rest of the visual representations in this document will use this “sideways” arrangement.

Why is this is a useful convention? Hopefully that will become obvious as you progress through the sections, but I'll give a brief explanation now—don't worry if it doesn't make sense just yet. 

The “sideways” arrangment makes it easier to see the relationship between the four characteristics in question.  On a conventionally arranged graph the probability curves related to *alpha* (confidence level) and *beta* (statistical power) overlap, and it's also more difficult to distinguish between the mean values for the sample correlation and the population correlation.  So, the example graphics are sideways in order to make it easier to keep the various concepts separate and therefore less confusing, yet still see the relationships between them.

## Probability curves and linear regression

Let's say you measure a variety of characteristics of a presumably representative sample of a population.  You can do a linear regression analysis of the measurements, and precisely calculate the correlations between the characteristics you measured.  But, your results are only precise descriptions of the sample.  They aren't precise descriptions of the population, because there is always some amount of error, some amount of potential discrepancy, between the mean value of some characteristic for a sample, and the mean value of that characteristic for the population.

So, you can't precisely determine the correlation between characteristics for the population. But what you can determine precisely is the probability that the population's correlation falls within some range of values.  In the case of null-hypothesis significance testing, your goal is to calculate the probability that the population correlation is above zero.  When you report that a correlation is, e.g., “statistically significant at ‘p<.05’”, you're reporting the probability that you calculated—based on the sample correlation—that the population's correlation is greater than zero.  In the case of ‘p<.05’, that probability is 0.95, in other words, 95%.

You can think about that probability calculation as being a probability curve that you draw around the sample correlation, which you determined from your measurements.  In the example graphic [figure NN], the horizontal line that splits the curve marks the value of the sample correlation.  The probability curve describes the correlation of the population.

This is an important distinction to understand.  In the example graphic [figure NN], the straight line is about the *sample*.  The curve is about the *population*.

The next example graphic [figure NN], is the opposite of that. The straight line is about the *population*.  The curve is about the *sample*.  The probability curve and bisecting line are on the opposite side of the vertical axis from the previous graph because they show the opposite relationship.

What is that relationship?  It's the probability of finding some particular value for a sample correlation, based on what the population correlation is.  Even though you may not be able to ever directly measure the population correlation, it does exist and it does have some precise—if unknown—value.  And that value establishes the probabilities of the sample correlation value you'll determine.

That probability curve is what *beta*, a.k.a. “statistical power”, describes.

But before I explain that, let's back up and reconsider the graphic in which the probability curve is related to the population correlation.  because what curve is what *alpha*, a.k.a., “confidence level”, or “*p* value”, describes.

## Confidence level & Statistical power – alpha & beta








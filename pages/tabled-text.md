## Statistical significance

I wanted to understand the four inter-related characteristics of linear regressions in order to better understand the problems with the use of null-hypothesis significance testing.  So, in this section I use sideways statistics to explore some of those problems.

The first thing I'm going to do is add a new characteristic to the basic sideways graphic.  So, the next example graphic, (figure NN), also includes the minimum *effect size* that is important.

![Figure NN: Including an estimate of importance](./images/type-2-errors-90-200.png)

The “minimum practically important *effect size*” is not included in most discussions of statistics because it's a matter of interpretation.  To know what its value is, you have make a decision about what an “important” amount of effect is.  For research that is intended to help people make decisions in the practice of some field, what is a “practically important *effect size*” is a relatively straight-forward&mdash;though not necessarily easy&mdash;question.  If an effect is large enough that people would use it, then it's important.  If it's too small to worry about, then it's not important.  Since an effect's importance is determined by its impact on practice, I use the term “practically important” to describe it.

In the example graph, the minimum practically important *effect size* is higher than the minimum sample correlation that would be statistically significant.  Which means that the analysis will identify any practically important correlation as statistically significant.  Which is all well and good.  The problem is that there are statistically significant correlations that are not practically important.

Specifically the problem is the range of correlation values between the minimum statistically significant correlation and the minimum practically important correlation.  Any value in that range is large enough to be statistically significant, but too small to be practically important.

The important thing to understand about that range is that it increases with sample size.  The minimum practically important correlation is independent of the sample size, since it's not an inherent feature of the data, but instead is the result of interpreting the data.  So, if you increase the sample size, the minmum practically important correlation stays the same, while the minimum statistically significant correlation drops, and therefore the distance between the two gets wider.


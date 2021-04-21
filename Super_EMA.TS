#
# Super EMA
# Author: TechRancher
# Date: 04/2021
# Follow me on GitHub: https://www.github.com/TechRancher
# I have taken three Exponential Moving Average
# (EMA) and have placed them into one place
# to be plotted as a unit. 
# This can be used with a strategy I call "Pivot On EMA"
# Go to the README page at: 
# https://www.github.com/TechRancher/PivotOnEMA 
# To learn more about this strategy.
#

# User Inputs
#hint price: Enter the type of price you want the Exponential Moving Average (EMA) to be calculated.
#hint EMA_small: The number of bars which affect the Exponential Moving Average (EMA) most significantly.
#hint EMA_medium: The number of bars which affect the Exponential Moving Average (EMA) most significantly.
#hint EMA_large: The number of bars which affect the Exponential Moving Average (EMA) most significantly.
#hint displace: The displacement of the Exponential Moving Average (EMA) study, in bars. Positive value signify backward displacement.
input price = close;
input EMA_small = 20;
input EMA_medium = 50;
input EMA_large = 100;
input displace = 0;

# Plot EMAs
plot Small = ExpAverage(price[-displace], EMA_small);
plot Medium = ExpAverage(price[-displace], EMA_medium);
plot Large = ExpAverage(price[-displace], EMA_large);

# Customize Color of Plot
Small.SetDefaultColor(CreateColor(143, 187, 255));
Medium.SetDefaultColor(CreateColor(46, 255, 38));
Large.SetDefaultColor(CreateColor(241, 255, 219));

# Group 5 - Project 4
<br>

## Renewable Energy Prediction

<br>

## Project Description
As we progress as a society, the call for more energy use is inevitable. Since we are all living on this planet and would like to keep that status, we would want to use renewable energy instead of non-renewable energy. Our goal is to use past and current data to predict which states, by 2035, will be running entirely on sustainable, renewable energy. Our data will also show which states would not be producing the same amount of renewable energy compared to energy consumption by 2035.

<br>

## Data Sources

• https://www.eia.gov/state/seds/seds-data-complete.php?sid=US#Consumption
<br>
• https://www.eia.gov/state/seds/seds-data-complete.php
<br>
• https://www.eia.gov/state/seds/seds-data-complete.php?sid=US#PricesExpenditures

<br>

## Section I - Data Extraction, Transformation, and Loading
We obtained all our data from the U.S Energy Information Administration. All of our files had very similar data structures and represents all of the energy used in btu and in millions $ from 1960 to 2020.
<br>
<br>
The data that represented each state were in their 2 letter abbreviations and was cleaned via Pandas to keep the name scheme consistent within all data sources and other files. The data for renewable energy need to be filtered out under the MSN 'REPRB'. We needed to extract the data for total (renewable) energy production, total energy consumption, prices, and population for each year and transformed into a linear format whereas the headers were the different variables (year, energy production, energy consumption, population, and prices) and the index were the state names. This was done for both each individual state and the entire country as a whole.

<br>

## Section II - Why Linear Regression?
We chose linear regression machine learning as it is less complex compared to other machine learning techniques such as a time series. A time series is extrapolation meaning that it plays a major role in forecasting the future, estimates a value that isn't within the data set but it does not have the most accurate predictions. Linear regression is interpolation meaning that it would be more likely for the prediction to be correct opposed to a time series.
<br>
<br>
Since our dataset is very complex, we thought that multiple linear regression models would be a perfect. Though there is one glaring issue with linear regression which that it can over simplify real world problems from assuming a linear relationship. We did however recognize that our dataset had a very good linear relationship between many variables. Since linear regression is very susceptibile to be overfitting, we wanted to make sure we did not overfit.

<br>

## Section III - Calculating Linear Regression
After we merged and cleaned our raw data of the total US information from the years 1970 to 2020, we imported it into Jupyter Notebook and calcuated the total energy deficit by taking the difference between the renewable energy production and total energy consumption. We took the year, production, population, and price as the 'X' features and the difference as the 'Y' feature. We did not include the consumption data since that would overfit the model.
<br>
<br>
After calculating the MSE and R<sup>2</sup> score, we ran a linear regression model for each of the following features: production, population, price, and consumption. The 'X' for each model were the years whereas 'Y' were the features. For each model, we looped through the years from 2021 to 2035 to get predicted values for each feature. With this data, we made a list of predictions from 2021 to 2035 for each feature. Using the original model that was created in the beginning, we looped through the list of predictions for each variable to predict the differences for the years 2021 to 2035. This results in predictions for renewable energy production, total energy consumption, total population, energy costs, and the difference between renewable energy production and total energy consumption.


<br>

## Technologies
• Clean and modify the data via Pandas and Jupyter Notebook.
<br>
• Flask app for backend website developement.
<br>
• Use HTML, CSS, and JavaScript on the front end.

<br>

## Contributors
• Artem Iliushin
<br>
• Bhumi Bhusal
<br>
• Rafael Tem Pahs
<br>
• Ryan Callaghan
<br>
• Ryan Cheng
<br>

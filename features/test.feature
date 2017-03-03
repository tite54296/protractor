@all
Feature: Buy products
  As a customer of YourLogo,
  Once I select my desired items
  I want to be able to purchase them

Background:
  Given I am on YourLogo website

Scenario: buy two women products
  Given I am on the women section of the store
  When I add the "Faded short sleeve T-shirt" to my cart
  And I add the "Printed dress" to my cart
  And I confirm my order
  Then I should get a confirmation about my purchase

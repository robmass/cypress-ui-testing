Feature: Search functionality

  Scenario: Using the search input

    Given I am on the homepage
    When I fill the search input with the "JavaScript" term
    And I click on the submit button
    Then I should be redirected to a search page with the results of the "JavaScript" search
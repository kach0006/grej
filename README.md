# Description

This is a school project website, featuring a fake e-commerce site for the fictitious brand GREJ.

## Development

Since the project uses only vanilla web technologies, you can edit it directly in your preferred
text editor (like VS Code):

HTML: Edit the structure and content in .html files

CSS: Customize styling in .css files

JavaScript: Change interactivity in .js files

## Authors

Signe Storgaard (https://github.com/sist0002)

Kia Vinther (https://github.com/kivi0001)

Kamilla Christiansen (https://github.com/kach0006)

Ida Petersen (https://github.com/idax3451)

## Project structure

Images, icons and fonts are kept in separate folders within the "assets" folder.

CSS documents are kept in the "css" folder.

Javascript documents are kept in the "js" folder.

## Script linking

Scripts should be placed in the Head of the HTML document with a defer attribute.

## Naming structure

With the exception of index.html, all HTML documents should be named the same as the intended
landing page title. Example: produkter.html

If you are developing a feature in a separate HTML document that will be copied into another HTML
document later, such as a header section that will appear on multiple pages, the name of the HTML
document should be highly descriptive of its content. Example: header.html

Although the majority of the website content is in Danish, English is our technical working
language, and all classes and IDs should have English names.

The README.md should also be written in English.

In HTML, names consisting of multiple words should be connected with a hyphen symbol. Example:
product-container

In Javascript, names should be written in camel case. Example: productContainer

## API endpoints

produkter.js is fetching data from:
https://dummyjson.com/products/category/kitchen-accessories?limit=0

## Git branches

The name of the Git branches published should reflect the feature or specific document worked on by
the developer, and the name of the developer. For example: kamilla-product-cards-update

If the entire group has verbally agreed that an individual is setting up a specific feature or
document, branch names may be more vague.

## Workflow

Most work is divided into feature branches.

All team members must sync to the most recent copy of main before changes are made to shared across
several documents, such as general.css.

Team members must align on tasks, so that no more than one person is making changes to a document at
the same time.

Features that are used across multiple documents, such as header and footer, must be created in
separate documents so that their contents can easily be copied into other documents.

When a push is made, the developer must leave a short description of the features or documents
added, or impacted by their changes.

<div align="center">

[![Phony Logo](https://raw.githubusercontent.com/phony-php/phony/master/.github/asset/phony-logo.png)](https://github.com/phony-php/phony-docs)

</div>

<div align="center">

# Phony `PHP` Faker Documentation

</div>

[Phony](https://github.com/phony-php/phony) uses the [Jigsaw](http://jigsaw.tighten.co/) static site generator for its documentation.

Here is how you can generate the documentation locally:

1. Clone the `phony-docs` repository.

    ```sh
    git clone https://github.com/phony-php/phony-docs.git
    ```

2. Go to your `phony-docs` folder

    ```sh
    cd docs
    ```

3. Install `JS` dependencies (requires [npm](https://www.npmjs.com/))

    ```sh
    npm install
    ```

4. Install `PHP` dependencies for docs (requires [composer](https://getcomposer.org))

    ```sh
    composer install
    ```

5. Run the build to generate the static site

    ```sh
    npm run dev
    ```

6. View the static site at `/build_local`, or you can run the Jigsaw server:

    ```sh
    ./vendor/bin/jigsaw serve
    ```
<div align="center">

[![Phony Logo](https://raw.githubusercontent.com/phonyland/artwork/master/logo.png)](https://github.com/phonyland)

</div>

<div align="center">

# Documentation

</div>

[Phony](https://github.com/phonyland/phony) uses [Jigsaw](http://jigsaw.tighten.co/) static site generator for its documentation.

Here is how you can generate the documentation locally:

1. Clone the `phony-docs` repository.

    ```sh
    git clone https://github.com/phonyland/phony-docs.git
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

***

> If you want to start generating fake data with Phony, visit the main **[Phony Repository](https://github.com/phonyland/phony)**.

- Explore the docs: **[phony.land »](https://phony.land/)**
- Follow us on Twitter: **[@phonyphp »](https://twitter.com/phonyphp)**

Phony was created by **[Yunus Emre Deligöz](https://twitter.com/yedeligoez)** under the **[MIT license](https://opensource.org/licenses/MIT)**.

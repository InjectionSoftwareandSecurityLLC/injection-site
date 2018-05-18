import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline">
                      <li>
                          <a href="/">Home</a>
                      </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/downloads">Downloads</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">Store</a>
                        </li>
                    </ul>
                    <p class="copyright text-muted small">Copyright &copy; Injection 2018. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}
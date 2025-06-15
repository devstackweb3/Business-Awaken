import css from 'styled-jsx/css'

export const author = css`
  :root {
    --bg-login-btn-hover: linear-gradient(
      to bottom,
      #ffffff,
      #e8f1f349,
      #a7e7f467,
      #13b9da65
    );
    --bg-color: rgb(255, 255, 255);
    --container-color: #1a1e21;
    --second-color: #25a6c0;
    --text-color: #172317;
    --icon-size: 75px;
  }

  /* Menu Hamburger Animation */

  .card {
    max-width: 340px;
    min-width: 300px;
    width: 85%;
    margin: auto;
    margin-top: 2.5rem;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 1);
    transition: 0.3s;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  }

  .card-pic-resume {
    width: 90%;
    height: 75%;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-22px);
  }

  .card-content-table {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .card[data-state='#about'] {
    height: fit-content;
  }

  .card[data-state='#about'] .card-main {
    padding-top: 0;
  }

  .card[data-state='#contact']::-webkit-scrollbar {
    display: none;
    height: 435px;
  }

  .card[data-state='#experience']::-webkit-scrollbar {
    display: none;
    height: 720px;
    min-height: fit-content;
  }

  .card-table-cover {
    height: 100px;
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    transform: scale(1.2);
    transition: 0.5s;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-background {
    background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-jobtitle {
    bottom: 16px;
    letter-spacing: 1px;
    font-size: 10px;
  }

  .card-header-table {
    position: relative;
    display: flex;
    height: 125px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;
  }

  .card-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    transform: scale(1.2);
    transition: 0.5s;
  }

  .card-avatar {
    width: 55px;
    height: 55px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-22px);
  }

  .card-fullname {
    position: absolute;
    display: flex;
    bottom: 0;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(61%) translateX(-50%);
    left: 50%;
  }

  .card-jobtitle {
    position: absolute;
    bottom: 0;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(103%);
  }

  .is-on {
    background: var(--bg-login-btn-hover);
    color: var(--bg-color);
  }

  .card-button.is-active:hover {
    color: #2b2c48;
    background: linear-gradient(
      to bottom,
      rgba(127, 199, 231, 0) 0%,
      rgba(207, 204, 255, 0.2) 44%,
      rgba(211, 226, 255, 0.4) 100%
    );
  }

  .card-main {
    position: relative;
    flex: 1;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
  }

  .card-desc {
    line-height: 1.6;
    color: #636b6f;
    font-size: 14px;
    margin: 0;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
  }

  .card-social {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 30px;
  }

  .card-social svg {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }

  .card-social a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;
  }

  .card-social svg :hover {
    fill: darken(rgb(165, 181, 206), 20%);
  }

  .card-buttons {
    display: flex;
    background-color: #fff;
    margin-top: auto;
    position: sticky;
    bottom: 0;
    left: 0;
  }

  .card-buttons button {
    flex: 1 1 auto;
    user-select: none;
    background: 0;
    font-size: 13px;
    border: 0;
    padding: 15px 5px;
    cursor: pointer;
    color: #5c5c6d;
    transition: 0.3s;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    outline: 0;
    border-bottom: 3px solid transparent;
  }

  .card-section-table {
  }

  .card-section {
    display: none;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .card-timeline {
    margin-top: 30px;
    position: relative;
  }

  .card-timeline :after {
    background: linear-gradient(
      to top,
      rgba(134, 214, 243, 0) 0%,
      rgba(81, 106, 204, 1) 100%
    );
    content: '';
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: '';
  }

  /* Posts */

  a {
    cursor: pointer;
    color: black;
    text-decoration-line: none;
  }

  img {
    width: 100%;
  }

  .articles-section {
    display: flex;
  }

  .snaps-inline {
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 0.5rem;
  }

  .snaps-inline > * {
    scroll-snap-align: start;
  }

  .container {
    max-width: 965px;
    max-height: 900px;
    overflow: hidden;
    margin: auto;
    width: 100%;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
    box-sizing: border-box;
  }

  .category {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--second-color);
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .profile-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: 2px solid var(--second-color);
  }

  .profile-name {
    font-size: 0.82rem;
    font-weight: 500;
  }

  .footer {
    background: #1a1e21ff;
    width: 100%;
    align-content: center;
    padding: 30px 0;
    position: relative;
    height: fit-content;
  }

  .footer-cover {
    position: absolute;
    width: 100%;
    filter: blur(30px);
    transform: scale(2);
  }

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-col-group {
    display: flex;
    min-width: 300px;
    justify-content: space-between;
    margin: 20px;
  }

  .footer-column {
    display: flex;
    flex-direction: column;
  }

  .footer-subcolumn {
    display: flex;
    flex-direction: column;
  }

  .footer p {
    font-size: 0.938rem;
  }

  .footer-title {
    color: white;
  }

  .footer-text {
    color: rgba(255, 255, 255, 0.644);
  }

  .item {
  }

  .item:hover {
    background: var(--bg-login-btn-hover);
    -webkit-text-fill-color: rgb(12, 10, 10);
    font-weight: bold;
    transition: 1s;
  }

  .card-item {
    position: relative;
    padding-left: 60px;
    padding-right: 20px;
    padding-bottom: 30px;
    z-index: 1;
  }
  .card-item :last-child {
    padding-bottom: 5px;
  }

  .data-year {
    width: 10px;
    position: absolute;
    top: 0;
    left: 0px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    font-size: 11px;
    text-indent: 1px;
    border-radius: 50%;
    color: rgba(#868686, 0.7);
    background: linear-gradient(
      to bottom,
      lighten(#516acc, 20%) 0%,
      #516acc 100%
    );
  }

  .card-item-title {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .card-item-desc {
    font-size: 13px;
    color: #575772;
    line-height: 1.5;
    font-family: 'DM Sans', sans-serif;
  }

  /*.social-btn:hover {
    background: #d9d6d6;
    transition: 1s;
  }*/

  .card-contact-wrapper {
    margin-top: 20px;
  }

  .card-contact {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #6f6f7b;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
    cursor: pointer;
  }

  .card-contact svg {
    flex-shrink: 0;
    width: 30px;
    min-height: 34px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
  }

  .contact-me {
    border: 0;
    outline: none;
    background: linear-gradient(
      to right,
      rgba(83, 200, 239, 0.8) 0%,
      rgba(81, 106, 204, 0.8) 96%
    );
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    color: #fff;
    padding: 12px 16px;
    width: 100%;
    border-radius: 5px;
    margin-top: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Jost', sans-serif;
    transition: 0.8s;
  }

  .contact-me:hover {
    background: linear-gradient(
      to right,
      rgba(23, 154, 197, 0.8) 0%,
      rgba(41, 62, 146, 0.8) 96%
    );
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`

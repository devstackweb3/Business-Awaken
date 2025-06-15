import css from 'styled-jsx/css'

export const tableofcontent = css`
  .card-table-parent {
    min-width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    height: fit-content;
    padding: 12px;
    margin-top: 4rem;
    overflow-y: hidden;
    position: relative;
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 1);
    transition: 0.3s;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  }

  .card-header-table {
    position: relative;
    display: flex;
    height: 125px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;
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

  .card-main-sub-subjects {
    position: relative;
    flex: 1;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
  }

  .card-section-table {
  }

  .card-main-content-table {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }

  .card-table-of-content {
    font-weight: 700;
    font-size: 21px;
    margin-bottom: 8px;
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
`

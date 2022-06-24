import React from "react";
import style from "./index.module.css";

function Project({
  project: { img, title, live, github, description, technologies, roles },
  index,
}) {
  const toTwoDigits = (number) => {
    number = number.toString();
    return number.length === 1 ? "0" + number : number;
  };

  return (
    <div className={style.project} data-index={toTwoDigits(index + 1)}>
      <section className={style.top}>
        <p>{title}</p>
        <div className={style.icons}>
          <a href={github} target="_blank">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_16_17)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9395 0C6.75695 0 0.939453 5.8175 0.939453 13C0.939453 18.7525 4.6607 23.6113 9.8282 25.3338C10.4782 25.4475 10.722 25.0575 10.722 24.7163C10.722 24.4075 10.7057 23.3838 10.7057 22.295C7.43945 22.8963 6.59445 21.4988 6.33445 20.7675C6.1882 20.3938 5.55445 19.24 5.00195 18.9313C4.54695 18.6875 3.89695 18.0863 4.9857 18.07C6.00945 18.0538 6.7407 19.0125 6.98445 19.4025C8.15445 21.3688 10.0232 20.8162 10.7707 20.475C10.8845 19.63 11.2257 19.0613 11.5995 18.7362C8.70695 18.4113 5.68445 17.29 5.68445 12.3175C5.68445 10.9038 6.1882 9.73375 7.01695 8.82375C6.88695 8.49875 6.43195 7.16625 7.14695 5.37875C7.14695 5.37875 8.2357 5.0375 10.722 6.71125C11.762 6.41875 12.867 6.2725 13.972 6.2725C15.077 6.2725 16.182 6.41875 17.222 6.71125C19.7082 5.02125 20.797 5.37875 20.797 5.37875C21.512 7.16625 21.057 8.49875 20.927 8.82375C21.7557 9.73375 22.2595 10.8875 22.2595 12.3175C22.2595 17.3062 19.2207 18.4113 16.3282 18.7362C16.7995 19.1425 17.2057 19.9225 17.2057 21.1413C17.2057 22.88 17.1895 24.2775 17.1895 24.7163C17.1895 25.0575 17.4332 25.4638 18.0832 25.3338C20.6639 24.4625 22.9064 22.8038 24.4951 20.5913C26.0838 18.3788 26.9387 15.7238 26.9395 13C26.9395 5.8175 21.122 0 13.9395 0Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_17">
                  <rect
                    width="26"
                    height="26"
                    fill="white"
                    transform="translate(0.939453)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href={live} target="_blank">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3618 5.96184C16.6017 5.71352 16.8886 5.51544 17.2058 5.37918C17.523 5.24292 17.8642 5.17119 18.2094 5.16819C18.5546 5.16519 18.897 5.23098 19.2165 5.36171C19.536 5.49244 19.8263 5.68549 20.0705 5.92962C20.3146 6.17374 20.5076 6.46403 20.6384 6.78356C20.7691 7.10309 20.8349 7.44546 20.8319 7.79069C20.8289 8.13591 20.7572 8.47708 20.6209 8.79429C20.4846 9.1115 20.2866 9.3984 20.0382 9.63824L16.1382 13.5382C15.6507 14.0257 14.9895 14.2995 14.3 14.2995C13.6106 14.2995 12.9494 14.0257 12.4618 13.5382C12.2167 13.3014 11.8883 13.1704 11.5474 13.1734C11.2066 13.1763 10.8805 13.313 10.6395 13.5541C10.3984 13.7951 10.2617 14.1212 10.2588 14.462C10.2558 14.8029 10.3868 15.1313 10.6236 15.3764C11.5988 16.3513 12.9212 16.8989 14.3 16.8989C15.6789 16.8989 17.0013 16.3513 17.9764 15.3764L21.8764 11.4764C22.8237 10.4957 23.3478 9.18218 23.3359 7.81876C23.3241 6.45533 22.7772 5.15111 21.8131 4.18699C20.849 3.22286 19.5447 2.67598 18.1813 2.66414C16.8179 2.65229 15.5044 3.17642 14.5236 4.12364L12.5736 6.07364C12.4495 6.19356 12.3504 6.33701 12.2823 6.49562C12.2142 6.65422 12.1783 6.82481 12.1768 6.99742C12.1753 7.17003 12.2082 7.34122 12.2736 7.50098C12.3389 7.66075 12.4355 7.80589 12.5575 7.92796C12.6796 8.05002 12.8247 8.14654 12.9845 8.21191C13.1443 8.27728 13.3154 8.31017 13.4881 8.30867C13.6607 8.30717 13.8313 8.27131 13.9899 8.20317C14.1485 8.13504 14.2919 8.03601 14.4118 7.91184L16.3618 5.96184ZM9.86183 12.4618C10.3494 11.9744 11.0106 11.7006 11.7 11.7006C12.3895 11.7006 13.0507 11.9744 13.5382 12.4618C13.6582 12.586 13.8016 12.685 13.9602 12.7532C14.1188 12.8213 14.2894 12.8572 14.462 12.8587C14.6346 12.8602 14.8058 12.8273 14.9656 12.7619C15.1253 12.6965 15.2705 12.6 15.3925 12.478C15.5146 12.3559 15.6111 12.2107 15.6765 12.051C15.7419 11.8912 15.7748 11.72 15.7733 11.5474C15.7718 11.3748 15.7359 11.2042 15.6678 11.0456C15.5996 10.887 15.5006 10.7436 15.3764 10.6236C14.4013 9.64879 13.0789 9.10115 11.7 9.10115C10.3212 9.10115 8.99878 9.64879 8.02363 10.6236L4.12363 14.5236C3.62698 15.0033 3.23083 15.5771 2.9583 16.2115C2.68578 16.846 2.54233 17.5283 2.53633 18.2188C2.53033 18.9092 2.6619 19.5939 2.92336 20.233C3.18482 20.8721 3.57094 21.4527 4.05918 21.9409C4.54742 22.4291 5.12801 22.8153 5.76707 23.0767C6.40613 23.3382 7.09087 23.4697 7.78132 23.4637C8.47177 23.4577 9.15411 23.3143 9.78854 23.0418C10.423 22.7692 10.9967 22.3731 11.4764 21.8764L13.4264 19.9264C13.5506 19.8065 13.6496 19.6631 13.7178 19.5045C13.7859 19.3459 13.8218 19.1753 13.8233 19.0027C13.8248 18.83 13.7919 18.6589 13.7265 18.4991C13.6611 18.3393 13.5646 18.1942 13.4425 18.0721C13.3205 17.9501 13.1753 17.8535 13.0156 17.7882C12.8558 17.7228 12.6846 17.6899 12.512 17.6914C12.3394 17.6929 12.1688 17.7288 12.0102 17.7969C11.8516 17.865 11.7082 17.9641 11.5882 18.0882L9.63823 20.0382C9.39839 20.2866 9.11149 20.4846 8.79428 20.6209C8.47707 20.7572 8.1359 20.8289 7.79068 20.8319C7.44545 20.8349 7.10308 20.7691 6.78355 20.6384C6.46402 20.5076 6.17373 20.3146 5.92961 20.0705C5.68548 19.8263 5.49243 19.5361 5.3617 19.2165C5.23097 18.897 5.16518 18.5546 5.16818 18.2094C5.17118 17.8642 5.2429 17.523 5.37917 17.2058C5.51543 16.8886 5.71351 16.6017 5.96183 16.3618L9.86183 12.4618Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </section>
      <a href={live} className={style.image} target="_blank">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.75 23C28.75 24.525 28.1442 25.9875 27.0659 27.0659C25.9875 28.1442 24.525 28.75 23 28.75C21.475 28.75 20.0125 28.1442 18.9341 27.0659C17.8558 25.9875 17.25 24.525 17.25 23C17.25 21.475 17.8558 20.0125 18.9341 18.9341C20.0125 17.8558 21.475 17.25 23 17.25C24.525 17.25 25.9875 17.8558 27.0659 18.9341C28.1442 20.0125 28.75 21.475 28.75 23V23Z"
            stroke="white"
            strokeWidth="3.83333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.71118 23.0002C7.15302 15.2242 14.4191 9.5835 23 9.5835C31.5828 9.5835 38.847 15.2242 41.2888 23.0002C38.847 30.7761 31.5828 36.4168 23 36.4168C14.4191 36.4168 7.15302 30.7761 4.71118 23.0002V23.0002Z"
            stroke="white"
            strokeWidth="3.83333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <img src={img} alt={title} />
      </a>
      <section className={style.description}>
        <p>{description}</p>
        <div className={style.list_area}>
          <div className={style.grid}>
            <p className={style.label}>Technologies:</p>
            <div className={style.list}>
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
          <div className={style.grid}>
            <p className={style.label}>Roles:</p>
            <div className={style.list}>
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;

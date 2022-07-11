import { css, Global } from '@emotion/react'
import React from 'react'

export function ResetStyle() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          user-select: none;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
        }
        html {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
          font-family: 'Spoqa Han Sans';
          line-height: 1.48;
        }
        body {
          margin: 0;
        }
        main {
          display: block;
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        pre {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        a {
          background-color: transparent;
          color: inherit;
          text-decoration: none;
        }
        abbr[title] {
          border-bottom: none;
          text-decoration: underline dotted;
        }
        b,
        strong {
          font-weight: bolder;
        }
        code,
        kbd,
        samp {
          font-family: monospace, monospace;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        img {
          border-style: none;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          margin: 0;
          padding: 0;
          background-color: inherit;
        }
        button,
        input {
          overflow: visible;
        }
        input[type='text'] {
          border-radius: 0;
        }
        button,
        select {
          text-transform: none;
        }
        input[type='text'] {
          border-radius: 0;
        }
        textarea {
          overflow: auto;
          border-radius: 0;
        }
        template {
          display: none;
        }
        [hidden] {
          display: none;
        }
        li,
        ol {
          list-style: none;
          background-image: none;
          background-repeat: no-repeat;
          background-position: 0;
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video,
        input,
        textarea {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
        }
        /** custom styles */
        button {
          user-select: none;
          border: 0;
          outline: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        table {
          border-spacing: 0;
        }
        i {
          font-style: normal !important;
        }
        // for seo
        legend {
          display: block;
          width: 1px;
          height: 1px;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: -1000em;
        }
        video {
          mask-image: radial-gradient(#fff, #fff);
          backface-visibility: hidden;
        }
      `}
    />
  )
}

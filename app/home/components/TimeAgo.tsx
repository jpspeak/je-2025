"use client";

import React from "react";

import TA from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";
import ReactTimeAgo from "react-time-ago";

TA.addDefaultLocale(en);
TA.addLocale(ru);

function TimeAgo({ date }: { date: any }) {
  return <ReactTimeAgo date={date} locale="en-US" />;
}

export default TimeAgo;

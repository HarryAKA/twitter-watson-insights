/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  // Mongo database url
  mongodb: process.env.MONGODB || 'mongodb://localhost/celebs',

  // Personality Insights credentials
  personality_insights: {
    url: 'https://gateway.watsonplatform.net/personality-insights/api',
    username: '090c5456-b3bc-4d1a-a9b4-8c62f3f822d1',
    password: 'pKqtgT20keDI',
    version: 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: process.env.TWITTER ? JSON.parse(process.env.TWITTER) : [{
    consumer_key: 'uF6j3uf23WdCuwwiIzSMxoSLZ',
    consumer_secret: 'r2OEVMxblATg1ORtuNtLWboG4wYQfoonaYhtPfYhZEBuvpAkn4',
    access_token_key: '11317192-h5RosUQ96Dor67JoMK29WSVaVCMQTwDRLOCRbWqA7',
    access_token_secret: 'K7GCqrvQwhyHJO99W3nCsrxW9SDEUYKADeXE9F99R6wrg'
  }]
};

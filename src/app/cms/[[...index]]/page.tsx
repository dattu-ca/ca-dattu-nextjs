'use client'

/**
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio';
import {Config} from "sanity";
import config from '../../../../sanity.config';

export default function StudioPage() {
  return <NextStudio config={config as Config} />
}
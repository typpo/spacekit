import Units from './Units';
import { Ephem, GM } from './Ephem';
import Coordinates, { Coordinate3d } from './Coordinates';
import { getFullUrl } from './util';

import type { Simulation, SimulationContext } from './Simulation';

/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * ```
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 * ```
 */
export const EphemPresets: {
  MERCURY: Ephem;
  VENUS: Ephem;
  EARTH: Ephem;
  MOON: Ephem;
  MARS: Ephem;
  JUPITER: Ephem;
  SATURN: Ephem;
  URANUS: Ephem;
  NEPTUNE: Ephem;
  PLUTO: Ephem;
} = {
  // See https://ssd.jpl.nasa.gov/?planet_pos and https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
  MERCURY: new Ephem(
    {
      epoch: 2458426.5,
      a: 3.870968969437096e-1,
      e: 2.056515875393916e-1,
      i: 7.003891682749818,
      om: 4.830774804443502e1,
      w: 2.917940253442659e1,
      ma: 2.56190975209273e2,
    },
    'deg',
    true /* locked */,
  ),
  VENUS: new Ephem(
    {
      epoch: 2458426.5,
      a: 7.233458663591554e-1,
      e: 6.762510759617694e-3,
      i: 3.394567787211735,
      om: 7.662534150657346e1,
      w: 5.474567447560867e1,
      ma: 2.756687596099721e2,
    },
    'deg',
    true /* locked */,
  ),
  EARTH: new Ephem(
    {
      // Taken from https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
      /*
    epoch: 2451545.0,
    a: 1.00000011,
    e: 0.01671022,
    i: 0.00005,
    om: -11.26064,
    wBar: 102.94719,
    L: 100.46435,
    */

      // https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
      epoch: 2451545.0,
      a: 1.00000261,
      e: 0.01671123,
      i: -0.00001531,
      om: 0.0,
      wBar: 102.93768193,
      L: 100.46457166,

      /*
      epoch: 2458426.500000000,
      a: 1.000618919441359E+00,
      e: 1.676780871638673E-02,
      i: 0,
      om: 1.888900932218542E+02,
      w: 2.718307282052625E+02,
      ma: 3.021792498388233E+02,
     */
    },
    'deg',
    true /* locked */,
  ),
  MOON: new Ephem(
    {
      // https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html
      GM: GM.EARTH_MOON,

      // Geocentric
      // https://ssd.jpl.nasa.gov/horizons.cgi#results
      epoch: 2458621.5,
      a: 2.582517063772124e-3,
      e: 4.582543645168888e-2,
      i: 5.102060246928811,
      om: 1.085916732144811e2,
      w: 6.180561793729225e1,
      ma: 5.053270083636792e1,
      /*
     * heliocentric
    epoch: 2458621.500000000,
    a: 1.078855621785179E+00,
    e: 6.333300212090676E-02,
    i: 7.211217382317713E-02,
    om: 6.722057157026397E+01,
    w: 1.503642883585293E+02,
    ma: 1.666758688084831E+01,
   */
    },
    'deg',
    true /* locked */,
  ),
  MARS: new Ephem(
    {
      epoch: 2458426.5,
      a: 1.52371401537107,
      e: 9.336741335309606e-2,
      i: 1.848141099825311,
      om: 4.950420572080223e1,
      w: 2.866965847685386e2,
      ma: 2.538237617924876e1,
    },
    'deg',
    true /* locked */,
  ),
  JUPITER: new Ephem(
    {
      epoch: 2458426.5,
      a: 5.20180355911023,
      e: 4.89912558249006e-2,
      i: 1.303560894624275,
      om: 1.005203828847816e2,
      w: 2.73736301845404e2,
      ma: 2.31939544389401e2,
    },
    'deg',
    true /* locked */,
  ),
  SATURN: new Ephem(
    {
      epoch: 2458426.5,
      a: 9.577177295536776,
      e: 5.101889921719987e-2,
      i: 2.482782449972317,
      om: 1.136154964073247e2,
      w: 3.394422648650336e2,
      ma: 1.870970898012944e2,
    },
    'deg',
    true /* locked */,
  ),
  URANUS: new Ephem(
    {
      epoch: 2458426.5,
      a: 1.914496966635462e1,
      e: 4.832662948112808e-2,
      i: 7.697511134483724e-1,
      om: 7.414239045667875e1,
      w: 9.942704504702185e1,
      ma: 2.202603033874267e2,
    },
    'deg',
    true /* locked */,
  ),
  NEPTUNE: new Ephem(
    {
      epoch: 2458426.5,
      a: 3.00962226342805e1,
      e: 7.36257118719377e-3,
      i: 1.774569249829094,
      om: 1.318695882492132e2,
      w: 2.586226409499831e2,
      ma: 3.152804988924479e2,
    },
    'deg',
    true /* locked */,
  ),
  PLUTO: new Ephem(
    {
      epoch: 2454000.5,
      a: 39.4450697257,
      e: 0.250248713478,
      i: 17.0890009196,
      om: 110.376957955,
      w: 112.597141677,
      ma: 25.2471897122,
    },
    'deg',
    true /* locked */,
  ),
};

interface NaturalSatelliteRecord {
  Planet: string;
  'Epoch String': string;
  'Epoch JD': number;
  'Element Type': string;
  'Sat.': string;
  tags: string;
  a: number | string;
  e: number | string;
  w: number | string;
  M: number | string;
  i: number | string;
  node: number | string;
  n: number | string;
  P: number | string;
  Pw: number | string;
  Pnode: number | string;
  RA: number | string;
  Dec: number | string | null;
  Tilt: number | string | null;
  Ref: string;
}

type ReferencePlanePole = {
  ra: number;
  dec: number;
};

const NATURAL_SATELLITE_EQUATORIAL_POLES: Record<
  string,
  ReferencePlanePole
> = {
  // J2000 pole orientations from NAIF PCK pck00011.tpc.
  Pluto: {
    ra: 132.993,
    dec: -6.163,
  },
  Uranus: {
    ra: 257.311,
    dec: -15.175,
  },
};

const J2000_OBLIQUITY = Coordinates.getObliquity();
const REFERENCE_PLANE_Z_AXIS: Coordinate3d = [0, 0, 1];
const VECTOR_EPSILON = 1e-12;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function normalizeDegrees(angleDeg: number) {
  const normalized = angleDeg % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function dotProduct(a: Coordinate3d, b: Coordinate3d): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function crossProduct(a: Coordinate3d, b: Coordinate3d): Coordinate3d {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function magnitude(vector: Coordinate3d): number {
  return Math.sqrt(dotProduct(vector, vector));
}

function normalizeVector(vector: Coordinate3d): Coordinate3d {
  const vectorMagnitude = magnitude(vector);
  if (vectorMagnitude < VECTOR_EPSILON) {
    throw new Error('Cannot normalize zero-length vector');
  }

  return vector.map((value) => value / vectorMagnitude) as Coordinate3d;
}

function transformToReferenceFrame(
  vector: Coordinate3d,
  basis: [Coordinate3d, Coordinate3d, Coordinate3d],
): Coordinate3d {
  return [
    basis[0][0] * vector[0] +
      basis[1][0] * vector[1] +
      basis[2][0] * vector[2],
    basis[0][1] * vector[0] +
      basis[1][1] * vector[1] +
      basis[2][1] * vector[2],
    basis[0][2] * vector[0] +
      basis[1][2] * vector[1] +
      basis[2][2] * vector[2],
  ];
}

function equatorialToEcliptic(vector: Coordinate3d): Coordinate3d {
  return Coordinates.equatorialToEcliptic_Cartesian(
    vector[0],
    vector[1],
    vector[2],
    J2000_OBLIQUITY,
  );
}

function getReferencePlanePole(
  moon: NaturalSatelliteRecord,
): ReferencePlanePole | undefined {
  switch (moon['Element Type']) {
    case 'Laplace': {
      const ra = Number(moon.RA);
      const dec = Number(moon.Dec);
      if (Number.isFinite(ra) && Number.isFinite(dec)) {
        return { ra, dec };
      }
      return undefined;
    }
    case 'Equatorial':
      return NATURAL_SATELLITE_EQUATORIAL_POLES[moon.Planet];
    default:
      return undefined;
  }
}

function getReferencePlaneBasis(
  pole: ReferencePlanePole,
): [Coordinate3d, Coordinate3d, Coordinate3d] {
  const zAxis = normalizeVector(
    Coordinates.sphericalToCartesian(
      Units.rad(pole.ra),
      Units.rad(pole.dec),
      1,
    ),
  );

  let xAxis = crossProduct(REFERENCE_PLANE_Z_AXIS, zAxis);
  if (magnitude(xAxis) < VECTOR_EPSILON) {
    xAxis = [1, 0, 0];
  }
  xAxis = normalizeVector(xAxis);

  const yAxis = normalizeVector(crossProduct(zAxis, xAxis));
  return [xAxis, yAxis, zAxis];
}

function getPeriapsisDirection(
  inclinationDeg: number,
  nodeDeg: number,
  periapsisDeg: number,
): Coordinate3d {
  const inclination = Units.rad(inclinationDeg);
  const node = Units.rad(nodeDeg);
  const periapsis = Units.rad(periapsisDeg);

  return [
    Math.cos(node) * Math.cos(periapsis) -
      Math.sin(node) * Math.sin(periapsis) * Math.cos(inclination),
    Math.sin(node) * Math.cos(periapsis) +
      Math.cos(node) * Math.sin(periapsis) * Math.cos(inclination),
    Math.sin(periapsis) * Math.sin(inclination),
  ];
}

function getOrbitalPole(
  inclinationDeg: number,
  nodeDeg: number,
): Coordinate3d {
  const inclination = Units.rad(inclinationDeg);
  const node = Units.rad(nodeDeg);

  return [
    Math.sin(node) * Math.sin(inclination),
    -Math.cos(node) * Math.sin(inclination),
    Math.cos(inclination),
  ];
}

function convertReferencePlaneAnglesToEcliptic(
  moon: NaturalSatelliteRecord,
): { i: number; om: number; w: number } {
  if (moon['Element Type'] === 'Ecliptic') {
    return {
      i: Number(moon.i),
      om: Number(moon.node),
      w: Number(moon.w),
    };
  }

  const pole = getReferencePlanePole(moon);
  if (!pole) {
    throw new Error(
      `Missing reference plane pole for ${moon.Planet} ${moon['Sat.']} (${moon['Element Type']})`,
    );
  }

  const referenceBasis = getReferencePlaneBasis(pole);
  const periapsisDirection = getPeriapsisDirection(
    Number(moon.i),
    Number(moon.node),
    Number(moon.w),
  );
  const orbitalPole = getOrbitalPole(Number(moon.i), Number(moon.node));

  const eclipticPeriapsis = normalizeVector(
    equatorialToEcliptic(
      transformToReferenceFrame(periapsisDirection, referenceBasis),
    ),
  );
  const eclipticPole = normalizeVector(
    equatorialToEcliptic(
      transformToReferenceFrame(orbitalPole, referenceBasis),
    ),
  );

  const inclination = Math.acos(clamp(eclipticPole[2], -1, 1));
  const nodeVector: Coordinate3d = [-eclipticPole[1], eclipticPole[0], 0];
  const nodeMagnitude = magnitude(nodeVector);

  let node = 0;
  let periapsis = 0;

  if (nodeMagnitude < VECTOR_EPSILON) {
    periapsis = Math.atan2(eclipticPeriapsis[1], eclipticPeriapsis[0]);
  } else {
    const ascendingNode = normalizeVector(nodeVector);
    const transverseAxis = normalizeVector(
      crossProduct(eclipticPole, ascendingNode),
    );

    node = Math.atan2(ascendingNode[1], ascendingNode[0]);
    periapsis = Math.atan2(
      dotProduct(eclipticPeriapsis, transverseAxis),
      dotProduct(eclipticPeriapsis, ascendingNode),
    );
  }

  return {
    i: Units.deg(inclination),
    om: normalizeDegrees(Units.deg(node)),
    w: normalizeDegrees(Units.deg(periapsis)),
  };
}

/**
 * A class for fetching orbital elements of natural satellites in our solar
 * system.
 */
export class NaturalSatellites {
  private _simulation: Simulation;

  private _context: SimulationContext;

  private _satellitesByPlanet: Record<
    string,
    {
      name: string;
      elementType: string;
      tags: Set<string>;
      ephem: Ephem;
    }[]
  >;

  private _readyPromise: Promise<NaturalSatellites>;

  constructor(simulation: Simulation) {
    this._simulation = simulation;
    this._context = simulation.getContext();

    this._satellitesByPlanet = {};
    const dataUrl = getFullUrl(
      '{{data}}/processed/natural-satellites.json',
      this._context.options.basePath,
    );

    this._readyPromise = new Promise((resolve, reject) => {
      fetch(dataUrl)
        .then((resp) => resp.json())
        .then((moons) => {
          moons.forEach((moon: NaturalSatelliteRecord) => {
            const planetName = moon.Planet.toLowerCase();
            if (!this._satellitesByPlanet[planetName]) {
              this._satellitesByPlanet[planetName] = [];
            }

            switch (moon['Element Type']) {
              case 'Ecliptic':
              case 'Equatorial':
              case 'Laplace':
                break;
              default:
                console.warn(
                  `Ephemeris type not yet implemented: ${moon['Element Type']}`,
                );
                return;
            }

            const eclipticAngles = convertReferencePlaneAnglesToEcliptic(moon);

            let ephemGM;
            switch (moon.Planet) {
              case 'Earth':
                ephemGM = GM.EARTH_MOON;
                break;
              case 'Pluto':
                ephemGM = GM.PLUTO_CHARON;
                break;
              default:
                ephemGM = GM[moon.Planet.toUpperCase() as keyof typeof GM];
            }
            if (!ephemGM) {
              console.error(`Could not look up GM for ${moon.Planet}`);
            }

            const ephem = new Ephem(
              {
                GM: ephemGM,
                epoch: Number(moon['Epoch JD']),
                a: Units.kmToAu(Number(moon.a)),
                e: Number(moon.e),
                i: eclipticAngles.i,
                w: eclipticAngles.w,
                om: eclipticAngles.om,
                ma: Number(moon.M),
              },
              'deg',
              true /* locked */,
            );

            this._satellitesByPlanet[planetName].push({
              name: moon['Sat.'],
              elementType: moon['Element Type'],
              tags: new Set(moon['tags'].split(',')),
              ephem,
            });
          });
          console.info('Loaded', moons.length, 'natural satellites');
          resolve(this);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * Get a list of satellites and their orbital elements for a given planet.
   * @param {String} planetName Name of a planet, e.g. "Jupiter"
   * @return {Object} List containing a list of dictionaries with information
   * on each satellite.
   */
  getSatellitesForPlanet(planetName: string) {
    return this._satellitesByPlanet[planetName.toLowerCase()];
  }

  load(): Promise<NaturalSatellites> {
    return this._readyPromise;
  }
}

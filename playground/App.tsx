import { useMemo, useState, type ComponentType } from 'react'
import * as pkg from '../src/index'
import { sportIcons, type SportIconKey } from '../src/sportIcons'
import type { IconProps } from '../src/types'

type IconEntry = [string, ComponentType<IconProps>]

const iconComponents = Object.entries(pkg).filter(
  (entry): entry is IconEntry => entry[0].startsWith('Icon') && typeof entry[1] === 'function',
)

const sportKeys = Object.keys(sportIcons) as SportIconKey[]

async function copyName(name: string) {
  try {
    await navigator.clipboard.writeText(name)
  } catch {
    // ignore
  }
}

export function App() {
  const [size, setSize] = useState(32)
  const [stroke, setStroke] = useState(2)
  const [query, setQuery] = useState('')
  const [dark, setDark] = useState(false)

  const filteredIcons = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return iconComponents
    return iconComponents.filter(([name]) => name.toLowerCase().includes(q))
  }, [query])

  const filteredSports = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return sportKeys
    return sportKeys.filter((key) => key.toLowerCase().includes(q))
  }, [query])

  return (
    <div className={`page${dark ? ' dark' : ''}`}>
      <header className="header">
        <div>
          <h1>AI Win Predict Icons</h1>
          <p className="subtitle">React · Tabler-style · {iconComponents.length} icons</p>
        </div>
        <div className="controls">
          <label className="field">
            <span>Search</span>
            <input
              type="search"
              placeholder="IconSearch…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <label className="field">
            <span>Size {size}</span>
            <input
              type="range"
              min={16}
              max={64}
              step={2}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </label>
          <label className="field">
            <span>Stroke {stroke}</span>
            <input
              type="range"
              min={1}
              max={3}
              step={0.5}
              value={stroke}
              onChange={(e) => setStroke(Number(e.target.value))}
            />
          </label>
          <button type="button" className="theme-btn" onClick={() => setDark((v) => !v)}>
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      {filteredSports.length > 0 && (
        <section className="section">
          <h2>sportIcons map</h2>
          <div className="grid">
            {filteredSports.map((key) => {
              const Icon = sportIcons[key]
              return (
                <button
                  key={key}
                  type="button"
                  className="cell"
                  title={`Copy sportIcons.${key}`}
                  onClick={() => copyName(`sportIcons.${key}`)}
                >
                  <Icon size={size} stroke={stroke} />
                  <span className="name">{key}</span>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {filteredIcons.length > 0 && (
        <section className="section">
          <h2>Components</h2>
          <div className="grid">
            {filteredIcons.map(([name, Icon]) => (
              <button
                key={name}
                type="button"
                className="cell"
                title={`Copy ${name}`}
                onClick={() => copyName(name)}
              >
                <Icon size={size} stroke={stroke} />
                <span className="name">{name}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {!filteredIcons.length && !filteredSports.length && <p className="empty">No matches</p>}
    </div>
  )
}

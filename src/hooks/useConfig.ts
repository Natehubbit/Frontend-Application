import { useEffect, useState } from 'react'
import ConfigService from '../services/ConfigService'
import { DashConfig } from '../types'

export const useConfig = () => {
  const [loading, setLoading] = useState(false)
  const [config, setConfig] = useState<DashConfig | null>(null)
  useEffect(() => {
    getConfig()
  }, [])
  const getConfig = async () => {
    setLoading(true)
    const data = await ConfigService.getConfig()
    data && setConfig(data)
    setLoading(false)
  }
  return {
    loading,
    config
  }
}

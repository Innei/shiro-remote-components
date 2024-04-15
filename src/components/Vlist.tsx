import React, { useEffect, useMemo } from 'react'
import { Virtuoso } from 'react-virtuoso'

export function Normal() {
  const data = useMemo(() => {
    return Array.from({ length: 100000 }, (_, index) => ({
      name: `User ${index}`,
      description: `Description for user ${index}`,
    }))
  }, [])

  return (
    <Virtuoso
      style={{ height: 400 }}
      totalCount={data.length}
      itemContent={(index) => {
        const user = data[index]
        return (
          <div
            style={{
              padding: '5px',
            }}
          >
            <p>
              <strong>{user.name}</strong>
            </p>
            <div>{user.description}</div>
          </div>
        )
      }}
    />
  )
}

export function Copied() {
  const data = useMemo(() => {
    return Array.from({ length: 100000 }, (_, index) => ({
      name: `User ${index}`,
      description: `Description for user ${index}`,
    }))
  }, [])

  const startAnchorNode = React.useRef<Node | null>(null)
  const startRangeStartAtIndex = React.useRef<number | null>(null)
  const startSelectedInDataIndex = React.useRef<number | null>(null)

  const isSelectAll = React.useRef(false)
  useEffect(() => {
    window.onmousedown = () => {
      isSelectAll.current = false
    }
    return () => {
      window.onmousedown = null
    }
  }, [])
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'a' && (e.metaKey || e.ctrlKey)) {
          isSelectAll.current = true
        } else if (
          e.key === 'c' &&
          (e.metaKey || e.ctrlKey) &&
          isSelectAll.current
        ) {
        } else {
          isSelectAll.current = false
        }
      }}
      onCopy={(e) => {
        if (isSelectAll.current) {
          e.preventDefault()
          e.clipboardData?.setData(
            'text/plain',
            data.reduce((acc, cur) => {
              return acc + cur.name + '\n' + cur.description + '\n\n'
            }, ''),
          )
          return
        }

        const selection = window.getSelection()
        if (!selection) return

        // 同一锚点不阻止复制，使用默认行为
        if (selection.anchorNode === startAnchorNode.current) {
          return
        }
        e.preventDefault()
        const currentFocusNode = selection.focusNode
        if (!currentFocusNode) return
        const currentRangeStartAtIndex = selection.anchorOffset
        if (typeof currentRangeStartAtIndex === 'undefined') return

        if (!startAnchorNode.current) return
        // 比较两次区间，取两次区间的数据集

        const currentFocusDataIndex = findClosestParentDataIndex(
          currentFocusNode.parentElement,
        )

        if (
          startSelectedInDataIndex.current === null ||
          currentFocusDataIndex === null
        )
          return

        const sliceData = data.slice(
          Math.min(startSelectedInDataIndex.current, currentFocusDataIndex),
          Math.max(startSelectedInDataIndex.current, currentFocusDataIndex) + 1,
        )

        // 复制到剪贴板
        e.clipboardData?.setData(
          'text/plain',
          sliceData.reduce((acc, cur) => {
            return acc + cur.name + '\n' + cur.description + '\n\n'
          }, ''),
        )
      }}
      onMouseDown={() => {
        requestAnimationFrame(() => {
          const selection = window.getSelection()
          if (!selection) return
          const currentAnchorNode = selection.anchorNode
          if (!currentAnchorNode) return
          startAnchorNode.current = currentAnchorNode

          const currentRangeStartAtIndex = selection.anchorOffset
          if (typeof currentRangeStartAtIndex === 'undefined') return
          startRangeStartAtIndex.current = currentRangeStartAtIndex

          startSelectedInDataIndex.current = findClosestParentDataIndex(
            startAnchorNode.current.parentElement,
          )
        })
      }}
    >
      <Virtuoso
        style={{ height: 400 }}
        totalCount={data.length}
        itemContent={(index) => {
          const user = data[index]
          return (
            <div
              data-index={index}
              style={{
                padding: '5px',
              }}
            >
              <p>
                <strong>{user.name}</strong>
              </p>
              <div>{user.description}</div>
            </div>
          )
        }}
      />
    </div>
  )
}

function findClosestParentDataIndex(node: Node | null): number | null {
  if (!node) return null
  if (node instanceof HTMLElement) {
    const index = node.getAttribute('data-index')
    if (index) {
      return parseInt(index)
    }
  }
  return findClosestParentDataIndex(node.parentNode)
}

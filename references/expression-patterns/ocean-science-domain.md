# Ocean Science Domain Expression Patterns

Module is designed to be read on its own.

## Domain-Specific Scenarios

| Scenario | Expression | 中文说明 |
|----------|------------|----------|
| Spatial distribution | `The spatial distribution of [property] reveals substantial variation across [region/basin].` | 用于描述海洋要素的空间分布格局。 |
| Temporal variability | `[Property] exhibits pronounced seasonal/interannual variability, with [pattern] during [season/period].` | 描述季节或年际变化特征。 |
| Water mass description | `The [water mass] is characterized by [properties], extending from [depth] to [depth].` | 描述水团属性和空间范围。 |
| Process interpretation | `This pattern is consistent with [physical process], driven by [mechanism].` | 连接观测现象与物理机制。 |
| Cross-basin comparison | `The contrast between [region A] and [region B] highlights the role of [factor].` | 跨海区对比分析。 |
| Observation-based | `In situ observations from [platform] reveal [finding].` | 基于现场观测的发现。 |
| Model-data comparison | `The model captures the observed [pattern], with discrepancies concentrated in [region/season].` | 模式与观测的对比评估。 |
| Data quality | `Quality control procedures remove [N]% of profiles based on [criteria].` | 数据质量控制说明。 |

## Recommended Expressions

| Scenario | Expression | 中文说明 |
|----------|------------|----------|
| Study area sentence | `Located in the [sea/basin], the study region is influenced by [currents/processes].` | 研究海区介绍常用句。 |
| Method description | `We analyze [N] years of [data type] from [source] to investigate [process].` | 方法和数据来源描述。 |
| Physical interpretation | `From a dynamical perspective, the results suggest that [mechanism] dominates [process].` | 动力学视角解释结果。 |
| Uncertainty statement | `Uncertainties associated with [source] may account for the observed [discrepancy].` | 讨论不确定性来源。 |
| Quantitative finding | `[Property] decreases/increases by [value] ([unit]) from [region A] to [region B].` | 报告定量结果。 |
| Mechanism linkage | `The observed [pattern] can be attributed to [mechanism], as evidenced by [diagnostic].` | 将现象归因于物理机制。 |

## Avoid Expressions

| Avoid | Better Direction | 中文说明 |
|-------|------------------|----------|
| `The ocean is changing.` | Specify what property, where, and how it is changing | 避免空泛描述，给出具体要素和区域。 |
| `Our results agree with previous studies.` | Specify which studies and on what quantitative point | 引用具体文献和具体结论。 |
| `More research is needed.` | State what specifically should be investigated and why | 明确未来研究的具体方向和原因。 |
| `The data clearly shows...` | State the specific quantitative finding | 用具体数据替代模糊表述。 |
| `This is an important finding.` | Explain why it matters for ocean dynamics or climate | 解释发现对海洋动力学或气候的意义。 |
| `The results are reasonable.` | Provide quantitative validation or physical reasoning | 给出定量验证或物理解释。 |

## Bilingual Examples

| 中文意图 | English Pattern | Example |
|----------|-----------------|---------|
| 描述中尺度涡旋特征 | `Mesoscale eddies in the [region] exhibit [property], with [quantitative description].` | `Mesoscale eddies in the South China Sea exhibit pronounced seasonal variability, with anticyclonic eddies dominating during winter and cyclonic eddies prevalent in summer.` |
| 描述热盐环流 | `The thermohaline circulation is characterized by [property], driven by [mechanism].` | `The thermohaline circulation in the Atlantic is characterized by northward transport of warm, saline waters in the upper kilometer, driven by deep water formation in the Nordic Seas.` |
| 描述海气通量 | `Air-sea fluxes of [quantity] show [pattern], with implications for [process].` | `Air-sea heat fluxes show strong cooling exceeding 200 W/m^2 over the Kuroshio Extension during winter, with implications for mode water formation and climate variability.` |
| 描述垂直结构 | `The vertical structure of [property] reveals [feature] at [depth], indicative of [process].` | `The vertical structure of potential density reveals a sharp pycnocline at 150-300 m depth, indicative of strong baroclinic adjustment in the subtropical gyre.` |
| 描述混合过程 | `Mixing rates of [order] are observed in [region], associated with [mechanism].` | `Mixing rates of O(10^-3) m^2/s are observed near the Luzon Strait, associated with internal tide generation and breaking over rough topography.` |
| 描述年际变化 | `Interannual variability of [property] is closely linked to [climate mode], with [time lag] response.` | `Interannual variability of sea surface temperature in the tropical Pacific is closely linked to ENSO, with a 2-3 month lagged response to Nino-3.4 index anomalies.` |
| 描述水团变性 | `[Water mass] undergoes [transformation] as it propagates [direction], driven by [process].` | `North Pacific Intermediate Water undergoes gradual warming and salinification as it propagates eastward along the subtropical gyre, driven by double-diffusive mixing and isopycnal stirring.` |
| 描述模型评估 | `The model reproduces the observed [feature] with [accuracy], but overestimates/underestimates [property] in [region].` | `The model reproduces the observed Kuroshio path with root-mean-square error of 30 km, but underestimates eddy kinetic energy in the Kuroshio Extension by approximately 25%.` |

## Usage Scenarios

- 研究区介绍 (study area)、数据描述 (data description)、结果 (results)、讨论 (discussion) 各部分可直接调用本模块。
- 当目标期刊为 JPO、JGR-Oceans、GRL 等海洋科学期刊时，可与对应的 journal contract 一起加载。
- 用于将数据处理结果翻译为物理海洋学语言，强调动力学解释。
- 用于跨海区、跨季节、跨深度对比时的表达统一。
- 用于描述观测平台（锚系、Argo、卫星、水下滑翔机等）的标准化表达。

---

*Module: ocean-science-domain*
